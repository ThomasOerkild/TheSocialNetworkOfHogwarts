
var my_JSON_object = getJSON(
    "./resources/data.json"
  );
  
var table = new Tabulator("#example-table", {
    data:my_JSON_object,           //load row data from array
    layout:"fitColumns",      //fit columns to width of table
    responsiveLayout:"hide",  //hide columns that dont fit on the table
    tooltips:true,            //show tool tips on cells
    addRowPos:"top",          //when adding a new row, add it to the top of the table
    history:true,             //allow undo and redo actions on the table
    movableColumns:true,      //allow column order to be changed
    resizableRows:true,       //allow row order to be changed
    height:"311px",
    layout:"fitColumns",
    initialSort:[             //set the initial sort order of the data
        {column:"in_degree", dir:"desc"},
    ],
    columns:[                 //define the table columns
        {title:"Name", field:"name"},
        {title:"In-Degree", field:"in_degree"},
        {title:"Out-Degree", field:"out_degree"},
        {title:"Betweenness Centrality", field:"bc"},
        {title:"Eigenvector Centrality", field:"ec"},
    ],
});