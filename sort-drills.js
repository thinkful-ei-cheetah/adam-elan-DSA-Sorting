// 1. Understanding merge sort

// given (21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40)
// what is the result after 3 recursive calls 


// 1st
// (21, 1, 26, 45, 29, 28, 2, 9),(16, 49, 39, 27, 43, 34, 46, 40)
//second 
// (21, 1, 26, 45),(29, 28, 2, 9), (16, 49, 39, 27, 43, 34, 46, 40)
//third 
// (21, 1, 26, 45), (29, 28, 2, 9), (16, 49, 39, 27), (43, 34, 46, 40)
//fourth 
// (21, 1),(26, 45), (29, 28, 2, 9), (16, 49, 39, 27), (43, 34, 46, 40)
// fifth 
// (21, 1), (26, 45), (29, 28),(2, 9), (16, 49, 39, 27), (43, 34, 46, 40)
// sixth
// (21, 1), (26, 45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34, 46, 40)
// seventh
// (21, 1), (26, 45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// eighth
// (21),(1), (26, 45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// ninth
// (21),(1), (26), (45), (29, 28),(2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// tenth
// (21), (1), (26), (45), (29), (28), (2, 9), (16, 49), (39, 27), (43, 34), (46, 40)
// eleventh
// (21), (1), (26), (45), (29), (28), (2), (9), (16, 49), (39, 27), (43, 34), (46, 40)
// twelfth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39, 27), (43, 34), (46, 40)
// thirteenth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39), (27), (43, 34), (46, 40)
// fourteenth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39), (27), (43), (34), (46, 40)
// fifteenth
// (21), (1), (26), (45), (29), (28), (2), (9), (16), (49), (39), (27), (43), (34), (46), (40)


// first merge 
// (1, 21)
// second merge 
// (1, 21),(26, 45)
// third merge
// (1, 21),(26, 45),(28,29)
// fourth merge
// (1, 21),(26, 45),(28,29), (2, 9)
// fifth merge 
// (1, 21),(26, 45),(28,29), (2, 9), (16,49), 
// 6th merge 
// (1, 21),(26, 45),(28,29), (2, 9), (16,49), (27, 39)
// 7th merge
// (1, 21),(26, 45),(28,29), (2, 9), (16,49), (27, 39), (34, 43)

