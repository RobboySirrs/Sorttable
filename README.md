#Info

1. Works on multiple tables
2. Have not tested it's limits with type of data yet.

# How to use

Table layout should be like this
```

<table table-sort id="theTable"> 
      <tbody>
        <tr>
          <th>ID</th>
        </tr>
         <tr>
          <td>23</td>
        </tr>
      </tbody>
      </table>
```
Add table-sort to tables element to activate sorting like this: 
```<table table-sort>```

Now it should work by clicking on the tableheader <th>

If Data in the column is numbers  = add data-type="number" like this: ```<th data-type="number">ID </th>```
If Data in the column are Dates or time = add data-type="date" like this: ```<th data-type="number">ID </th>```


If you should not sort on a certain columnt add no-sort like this: ```<th no-sort data-type="number">ID</th>```

See files for examples.
