import React from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { useAppSelector } from '../../app/hooks';
import {
  selectData
} from './dataSlice';
import styles from './DataTable.module.css';


const toCurrency = (value: number) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0});


type DataItem = {
  weekEnding: string
  retailSales: number
  wholesaleSales: number
  unitsSold: number
  retailerMargin: number
}

const defaultData: DataItem[] = []

const columnHelper = createColumnHelper<DataItem>()

const columns = [
  columnHelper.accessor('weekEnding', {
    header: "WEEK ENDING",
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('retailSales', {
    id: 'retailSales',
    cell: info => toCurrency(info.getValue()),
    header: "RETAIL SALES",
    footer: info => info.column.id,
  }),
  columnHelper.accessor('wholesaleSales', {
    header: () => 'WHOLESALE SALES',
    cell: info => toCurrency(info.getValue()),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('unitsSold', {
    header: "UNITS SOLD",
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('retailerMargin', {
    header: 'RETAILER MARGIN',
    cell: info => toCurrency(info.getValue()),
    footer: info => info.column.id,
  }),
]

export function DataTable() {
  
  const data: { sales: DataItem[] }[] = useAppSelector(selectData);

  const table = useReactTable({
    data: data?.[0]?.sales ?? defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    defaultColumn: {
      size: 40, //starting column size
      minSize: 200, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
  })

  return (
    <div className="p-2 block max-w-full overflow-x-scroll overflow-y-hidden">
      <table className="w-full "
        {...{
          style: {
            width: table.getCenterTotalSize(),
          },
        }}
      
      >
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
