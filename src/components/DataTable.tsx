import React, { useState, useMemo } from 'react'

export type Column<T> = {
  label: string
  accessor: keyof T
  sortable?: boolean
}

export type DataTableProps<T> = {
  data: T[]
  columns: Column<T>[]
  itemsPerPage?: number
}

function DataTable<T extends object>({
  data,
  columns,
  itemsPerPage = 5,
}: DataTableProps<T>) {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      columns.some((col) =>
        String(row[col.accessor])
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      )
    )
  }, [data, columns, searchTerm])

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData
    return [...filteredData].sort((a, b) => {
      const aVal = String(a[sortColumn])
      const bVal = String(b[sortColumn])
      return sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    })
  }, [filteredData, sortColumn, sortDirection])

  const totalPages = Math.ceil(sortedData.length / itemsPerPage)
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSort = (accessor: keyof T) => {
    if (sortColumn === accessor) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortColumn(accessor)
      setSortDirection('asc')
    }
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div>
      <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={handleSearchChange} style={{marginBottom: '1rem', padding: '0.5rem', width: '100%', maxWidth: '300px',}}/>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.accessor)}
                onClick={() => col.sortable && handleSort(col.accessor)}
                style={{cursor: col.sortable ? 'pointer' : 'default', borderBottom: '1px solid #ccc', padding: '0.5rem',}}>
                {col.label}{' '}
                {sortColumn === col.accessor &&
                  (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col.accessor)} style={{ padding: '0.5rem', borderBottom: '1px solid #eee' }}>{String(row[col.accessor])}</td>
              ))}
            </tr>
          ))}
          {paginatedData.length === 0 && (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: 'center' }}>Aucun résultat.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Précédent</button>
        <span>Page {currentPage} sur {totalPages}</span>
        <button onClick={() =>setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Suivant</button>
      </div>
    </div>
  )
}

export default DataTable
