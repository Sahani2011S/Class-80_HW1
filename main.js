function submit(){
    var guest1=document.getElementById("name_of_the_student_1").value;
    var guest2=document.getElementById("name_of_the_student_2").value;
    var guest3=document.getElementById("name_of_the_student_3").value;
    var guest4=document.getElementById("name_of_the_student_4"). value ;
    var guest5=document.getElementById("name_of_the_student_5").value;
    var guest6=document.getElementById("name_of_the_student_6").value;

    console.log(friend4)
    friends_array.push("<h4> GUEST NAME: " + friend1 + "</h4>");
    friends_array.push("<h4> GUEST NAME: " + friend2 + "</h4>");
    friends_array.push("<h4> GUEST NAME: " + friend3 + "</h4>");
    friends_array.push("<h4> GUEST NAME: " + friend4 + "</h4>");
    friends_array.push("<h4> GUEST NAME: " + friend5 + "</h4>");
    friends_array.push("<h4> GUEST NAME: " + friend6 + "</h4>");
    console.log(friends_array);
    var remove_commas = friends_array.join(" ")
    document.getElementById("Student_Details").innerHTML= remove_commas;

}

function sort(){
    friends_array.sort();
    console.log(friends_array);

    var display_student_array_sorting = [];

    var length_of_the_array = friends_array.length;

    for (var k = 0; k < length_of_the_array; k++)
    {
        display_student_array_sorting.push("<h3>   " + friends_array[k] + "</h3>");
        console.log(display_student_array_sorting)

    }
    var remove_commas = display_student_array_sorting.join(" ")

    document.getElementById("Friend_name_without_commas").innerHTML = remove_commas
}


