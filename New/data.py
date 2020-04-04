import xlrd
loc=('yasi.XlsX')
wb= xlrd.open_workbook(loc)
sheet=wb.sheet_by_index(0)
sheet.cell_value(0,0)
print(sheet.nrows)
