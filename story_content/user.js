window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{ 
  updateSliderOnScroll();
}

window.Script2 = function()
{
var time = getVar("Slider1");
updateVideoDuration(time);

}

};
