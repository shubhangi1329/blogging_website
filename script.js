
var modal1=document.getElementById('editexampleModal');
var btn2=document.getElementById('btn2');
var textfield=document.getElementById('txt1');
var  textfield2 =document.getElementById('txt2');
var renderpost=document.getElementById('posted');

var arr=[];




const dateobj=new Date();
const date=dateobj.toLocaleString();
const time=dateobj.toLocaleTimeString('en-US',{hour:'numeric',minute:'numeric',hour12:true});
const dt=`Created At: ${date} at ${time}`
const dt2=`Last Updated At:${date} at ${time}`
// create blog 
btn2.addEventListener('click',function(){
    
    const dataobj = { id: arr.length + 1, head: document.getElementById('txt1').value, post:document.getElementById('txt2').value, text: dt }
     
    arr.push(dataobj);
  
   
//display blog

    renderpost.innerHTML=arr.map((data)=>{
        return (`
        <div class="row me-2 ms-2 my-2 p-2 border border-dark " >
      <div class="heading my-2">
        <h1>${data.head}</h1>
      </div>

      <div class="contents">
      ${data.post}
      </div>

      <div class="blogdisplay">
          <div class="my-2">
              <button type="button" id=${data.id} onclick=edititem(this.id) class="btn btn-dark  my-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                   Edit Post
               </button>
                 <button type="button" id=${data.id} onclick=deleteitem(this.id) class="btn btn-dark my-2">Delete Post</button>
               </div>
      
      
                <div >
                 ${dt}
               </div>
      
      </div>
      </div>

        `)
     });
})


//delete blog

function deleteitem(id){
 arr=  arr.filter((item)=>{
        return item.id != id;
    })
 
    renderpost.innerHTML=arr.map((data)=>{
        return (`
        <div class="row me-2 ms-2 my-2 p-2 border border-dark " >
      <div class="heading my-2">
        <h1>${data.head}</h1>
      </div>

      <div class="contents">
      ${data.post}
      </div>

      <div class="blogdisplay">
          <div class="my-2">
              <button type="button" id=${data.id} onclick=edititem(this.id) class="btn btn-dark  my-2" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                   Edit Post
               </button>
                 <button type="button" id=${data.id} onclick=deleteitem(this.id) class="btn btn-dark my-2">Delete Post</button>
               </div>
      
      
                <div >
                 ${dt}
               </div>
      
      </div>
      </div>

        `)
     });
}

//edit blog

function edititem(id){
    const item=arr.filter((data,index)=>{
      return data.id==id;
    })
  
    modal1.innerHTML=`<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit a new post</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="mb-3">
              <label for="txt1" class="form-label"></label>
              <input type="text" class="form-control form-control-lg" id="txt1" placeholder="Enter Your Heading" value=${item[0].head}>
            </div>
            <div class="mb-3">
              <label for="txt2" class="form-label"></label>
              <textarea class="form-control form-control-lg" id="txt2" rows="3" placeholder="Enter Your Blog Post">${item[0].post}</textarea>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onclick=deleteitem(id) data-bs-dismiss="modal">Cancel Post</button>
        <button type="button" id="btn2" onclick=afteredit(document.getElementById('txt1').value,document.getElementById('txt2').value,${id})  data-bs-dismiss="modal" class="btn btn-primary">Publish Post</button>
      </div>
    </div>
  </div>`
  }

//new blog
function afteredit(d1, d2, id) {
    console.log(d1, d2, id)
    
    const items = { id: id, head: d1, post: d2, text: dt2 }
    arr = arr.map((data, index) => {
        if (data.id == id) {
            return items;
        }
        else {
            return data;
        }
    })

    renderpost.innerHTML = arr.map((data, index) => {
        return (` <div class="row me-2 ms-2 my-2 p-2 border border-dark " >
        <div class="heading my-2">
          <h1>${data.head}</h1>
        </div>

        <div class="contents">
        ${data.post}
        </div>

        <div class="blogdisplay">
            <div class="my-2">
                <button type="button" id=${data.id} onclick=editdata(this.id) class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                     Edit Post
                 </button>
                   <button type="button" id=${data.id} onclick=deletedata(this.id) class="btn btn-dark">Delete Post</button>
                 </div>
        
        
                  <div >
                  ${dt2}
                 </div>
        
        </div>
        </div> `)
    });
    // console.log(dataArr)

}



