const App=React.createClass({

 render:function(){
  return <div>
      <div>
          <Editor />
          <Previewor />
      </div>
  </div>
 }
});
const Editor=React.createClass({

 render:function(){
  return <div>world</div>
 }
});
const Previewor=React.createClass({

 render:function(){
  return <div>
      hello
  </div>
 }
})

ReactDOM.render(<App />,document.getElementById('content'));