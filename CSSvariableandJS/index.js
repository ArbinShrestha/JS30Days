
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Scoped CSS variables and JS</title>
    </head>
    <body>
        <h2>Update CSS Variables with <span class="h1">JS</span></h2>
        <div class="controls">
            <label for="spacing">Spacking:</label>
            <input type="range" name="spacing" min="10" max="200" value="10" data-sizing="px" >
            
            <label for="blur">Blur:</label>
            <input type="range" name="blur" min="0" max="10" value="0" data-sizing="px">

            <label for="base">Base Color</label>
            <input type="color" name="base" value="#ffc600">
        </div>

        <img src="http://unslpash.it/800/500?image=899" >

    <style>



        :root{
            --base: #ffc600;
            --spacing: 10px;
            --blur: 10px;
        }

        img{
            padding: var(--spacing);
            background: var(--base);
            filter: blur(var(--blur));
        }
        body{
            text-align: center;
        }
        body{
            bacground: #193549;
            color: white;
            font-family: "Helvetica Neue", sans-serif;
            font-weight:100;
            font-size: 50px;
        }
        .controls{
            margin-bottom: 50px;
        }
    </style>


    </body>
</html>