/* var n = 16809     
var c = 123     
var m = 11668
// output 136 */

/* var n = 92512     
var c = 413     
var m = 33040
// output 224 */

/* var n = 2339     
var c = 4    
var m = 1337
// output 584 */

/* var n = 96741     
var c = 945    
var m = 77194
// output 102 */

/* var n = 53270     
var c = 182    
var m = 30238
// output 292 */

/* var n = 47733     
var c = 230    
var m = 4840
// output 207 */

/* var n = 60751     
var c = 346    
var m = 20578
// output 175 */

/* var n = 19150     
var c = 99    
var m = 2945
// output 193 */

/* var n = 94566     
var c = 514    
var m = 47583
// output 183 */

/* var n = 17274     
var c = 5234    
var m = 12885
// output 3 */

/* var n = 39478     
var c = 364    
var m = 23991
// output 108 */

/* var n = 46052     
var c = 388    
var m = 43028
// output 118 */

/* var n = 21816     
var c = 14645    
var m = 1827
// output 1 */

/* var n = 98573     
var c = 74120    
var m = 44437
// output 1 */

/* var n = 47151     
var c = 78    
var m = 28526
// output 604 */

/* var n = 18991     
var c = 78    
var m = 10010
// output 243 */

/* var n = 28583     
var c = 113    
var m = 5299
// output 252 */

/* var n = 34587     
var c = 86    
var m = 33334
// output 402 */

function chocolateFeast(n, c, m) {
    var chocolateWithPackage = Math.floor(n / c)   
    var chocolateForEat = chocolateWithPackage
    var packageForChange = chocolateWithPackage - (chocolateWithPackage % m) 
    var packageForNext = chocolateWithPackage % m                                
    //console.log(chocolateWithPackage)                              
    //console.log(chocolateForEat)                                    
    //console.log(packageForChange)                                            
    //console.log(packageForNext)                                               
    while (packageForChange > 0) {
        chocolateWithPackage = Math.floor(packageForChange / m)
        //console.log(chocolateWithPackage)                                      
        chocolateForEat += chocolateWithPackage                                 
        //console.log(chocolateForEat)                                               
        packageForChange = chocolateWithPackage - (chocolateWithPackage % m)   
        //console.log(packageForChange)                                         
        packageForNext += chocolateWithPackage % m    
        //console.log(packageForNext)                                            
        if (packageForNext == m) {
            packageForChange += packageForNext
            packageForNext = 0
        }
    } 
    return chocolateForEat                                
}

var n = 34587     
var c = 86    
var m = 33334
// output 402
console.log(chocolateFeast(n, c, m))