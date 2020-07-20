// https://www.codewars.com/kata/5e0b72d2d772160011133654/train/javascript

function solve(arr){
  var days = 0;
  var sort = 1;
  
  while (1){
    // only sort if we need to
    if ( sort ) {
      arr.sort((a, b) => b - a);
      sort = 0;
    }
  
    // if the middle number is a 0 that means the last number is a 0 and we can exit the loop
    if ( arr[1] == 0 ){
      return days;   
    }
    
    // limit the number of iterations of the loop by knowing that 2,1,1 leads to 2 days
    if ( arr[0] > 1 && arr[1] > 0 && arr[2] > 0 ){
      arr[0] = arr[0]-2;
      arr[1]--;
      arr[2]--;
      days = days + 2;
      
      // since arr[0] is reduced by 2, we check it vs. arr[1] to see if we need to resort
      if ( arr[0] < arr[1] ) {
        sort = 1
      }
    }
    // if we cannot do 2,1,1 optimization then do 1,1,0 which leads to 1 day
    else{
      days++;
      
      arr[0]--;
      arr[1]--;
    
      // if arr[1] is now smaller than arr[2] then we need to resort
      if ( arr[1] < arr[2] ) {
        sort = 1
      }
    }
  }
}
