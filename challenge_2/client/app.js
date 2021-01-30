
document.querySelector("#submit").addEventListener('click', function(event) {
  event.preventDefault();
  sendSalesData(data);
});

// get the form data
var data = new FormData();
$.each($.('#sales-data')[0].files, function(i, file) {
  data.append('file-'+i, file);
});

// write a function that makes a post request to the server with the multipart data
var sendSalesData = function(data) {
  $.ajax({
    url: 'http://localhost:3000/',
    data: data,
    cache: false,
    contentType: false,
    processData: false,
    method: 'POST',
    success: () => {
      console.log('Posted the data to the server')
    },
    error: () => {
      console.log('FAILED');
    }
  })
}
