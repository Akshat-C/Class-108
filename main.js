function start_sound()
{
    navigator.mediaDevices.getUserMedia({
        audio : true
    });
c = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/by_QU-9in/model.json", modelReady);
}

function modelReady()
{
    c.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error);
    } else 
    {
        console.log(results);
        document.getElementById("sound_name").innerHTML = results[0].label;
        perc = results[0].confidence * 100;
        document.getElementById("accuracy").innerHTML = perc.toFixed(2) + " % ";

        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;
        document.getElementById("sound_name").style.color = "rgb("+r+","+ g +"," +b+")";
        document.getElementById("accuracy").style.color = "rgb("+r+","+ g +"," +b+")";

        i1 = document.getElementById("img1");
        i2 = document.getElementById("img2");
        i3 = document.getElementById("img3");
        i4 = document.getElementById("img4");

        if (results[0].label == "Background Noise")
        {
          i1.src="aliens-01.gif";
          i2.src="aliens-02.png";
          i3.src="aliens-03.png";
          i4.src="aliens-04.png";
        } else if (results[0].label == "Clapping")
        {
            i1.src="aliens-01.png";
            i2.src="aliens-02.gif";
            i3.src="aliens-03.png";
            i4.src="aliens-04.png";
        } else if (results[0].label == "Snap")
        {
            i1.src="aliens-01.png";
            i2.src="aliens-02.png";
            i3.src="aliens-03.gif";
            i4.src="aliens-04.png";
        } else if (results[0].label == "Cube Sounds")
        {
            i1.src="aliens-01.png";
            i2.src="aliens-02.png";
            i3.src="aliens-03.png";
            i4.src="aliens-04.gif";
        }
    }
}