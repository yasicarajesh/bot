import pandas as pd
file=pd.ExcelFile("yasi.xlsx")
file.sheet_names
df1=file.parse("sheet1")
