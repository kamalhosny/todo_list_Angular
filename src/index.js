var app=angular.module('toDoApp', []);
app.controller('AppController', function ($http, $scope) {

  $scope.items=[];
  $http.get('http://localhost:3000/items.json').then(
    function (ok) {
      $scope.items=ok.data;
    }, function (err) {
      console.log(err);
    }
  );


  $scope.addItem=function(){
    data={
      content: $scope.content,
    }
    $http.post('http://localhost:3000/items.json',{item: data}).then(
      function (ok) {
        $scope.items.push(ok.data);
        $scope.content="";
      }, function (err) {
        console.log(err);
      }
    )
  }


  $scope.changeDone=function(item){
    data={
      done: item.done
  }
  $http.put("http://localhost:3000/items/"+item.id+".json",{item: data}).then(
    function (ok) {
      item.done=ok.data.done;
      // $scope.todo.check[item.id]=ok.data.done;
    }, function (err) {
      console.log(err);
    }
  )
};

$scope.deleteItem=function(id){
  $http.delete("http://localhost:3000/items/"+id+".json").then(
    function (ok) {
      var i = $scope.items.findIndex(function(item) {
      return id === item.id;
    });
    $scope.items.splice(i, 1);
    }, function (err) {
      console.log(err);
    }
  )
}

$scope.editContent=function(item){
  data={
    content: item.content
  }
  $http.put("http://localhost:3000/items/"+item.id+".json",{item: data}).then(
    function (ok) {
      item.content=ok.data.content;
      // $scope.todo.check[item.id]=ok.data.done;
    }, function (err) {
      console.log(err);
    }
  )
}



});
