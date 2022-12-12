$(document).ready(init);

function init() {
    $margen = 20;//el tamaño de la zona activa
    $velocidad = 400;//velocidad de movimiento
    $("li").mouseenter(function(e){//cuando entre al li
        var ancho = $(this).width();
        var alto = $(this).height();
        
        var offset = $(this).offset(); 
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;
        
        
        $tapa = $(this).find(".tapa");//todos los elementos q estan dentro de la clase li
        //e.offsetX
        if(x < $margen){
            $tapa.css("margin-top", "0px");//que la tapa quede justo con la imagen

            $tapa.css("margin-left", "-"+ancho+"px");// ahi concatenacion del margen left - y mas el ancho definido en linea 7 y 8
            $tapa.animate(
                {'margin-left':'0px'},
                $velocidad, 
                'swing');
        }else if(x > ancho - $margen){
            $tapa.css("margin-top", "0px");
            $tapa.css("margin-left", ancho+"px");
            $tapa.animate({'margin-left':'0px'},
                $velocidad, 
                'swing');
        }else if(y < $margen){
            $tapa.css("margin-left", "0px");
            $tapa.css("margin-top", "-"+alto+"px");
            $tapa.animate({'margin-top':'0px'},
                $velocidad, 
                'swing');
        }else if(y > alto - $margen){
            $tapa.css("margin-left", "0px");
            $tapa.css("margin-top", alto+"px");
            $tapa.animate({'margin-top':'px'},
                $velocidad,
                'swing');
        }
        
        $tapa.css("visibility", "visible");
    });
    
    $("li").mouseleave(function(e){//cuando se salga de encima del li
        var ancho = $(this).width();
        var alto = $(this).height();
        
         
        var offset = $(this).offset(); 
        var x = e.pageX - offset.left;
        var y = e.pageY - offset.top;
        
        
        $tapa = $(this).find(".tapa");
        
        if(x < $margen){
            $tapa.animate({'margin-left':"-"+ancho+"px"},
                $velocidad,
                'swing');
        }else if(x > ancho - $margen){
            $tapa.animate({'margin-left': ancho+'px'},
                $velocidad,
                'swing');
        } else if(y < $margen){
            $tapa.animate({'margin-top':"-"+alto+"px"},
                $velocidad,
                'swing');
        }else if(y > alto - $margen){
            $tapa.animate({'margin-top':alto+"px"},
                $velocidad,
                'swing');
        }
        
    });
}
