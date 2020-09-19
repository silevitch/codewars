// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

function mazeRunner(maze, directions) {
  var start = [];

  main:
    for ( var i = 0; i < maze.length; i++ ){
      for ( var j = 0; j < maze.length; j++ ) {   
        if ( maze[i][j] == '2'){
          start = [i, j];
          
          break main;
        }
      }
    }
  
  var current = start;

  for ( var i = 0; i < directions.length; i++ ){
    if ( directions[i] == 'N' ){
      current[0]--;
    }
    else if( directions[i] == 'S' ) {
     current[0]++;
    }
    else if ( directions[i] == 'W' ){
      current[1]--;
    }
    else {
      current[1]++;
    }

    if ( current[0] == -1 || current[0] == maze.length || current[1] == -1 || current[1] == maze.length ){
      return 'Dead';
    }

    var spot = maze[ current[0] ][ current[1] ];
    
    if ( spot == 1 ){
      return 'Dead';
    }
    else if ( spot == 3 ){
      return 'Finish';
    }
  }
  
  return 'Lost';
}
