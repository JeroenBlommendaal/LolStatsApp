#addin "Cake.Yarn"
#tool "nuget:?package=Yarn.MSBuild&Version=1.15.2"

var target = Argument("target", "Default");
var configuration = Argument("configuration", "Release");
var webDir = "./LolApp/Web";
var wwwRootDir = "./LolApp/wwwroot";
var webBuildDir = $"{webDir}/build";

Task("Clean")
    .Does(() => {
        CleanDirectory(wwwRootDir);
        CleanDirectory(webBuildDir);
        DotNetCoreClean("./LolApp.sln", new DotNetCoreCleanSettings() {
            Configuration = configuration
        });
    });

Task("CompileJS")
    .Does(() => {
        Yarn.FromPath(webDir).Install();
        Yarn.FromPath(webDir).RunScript("build");
    });

Task("CopyToWWWRoot")
    .Does(() => {
        CopyDirectory($"{webDir}/build", wwwRootDir);
    });

Task("CompileDotNet")
    .Does(() => {
        DotNetCoreBuild("./LolApp.sln", new DotNetCoreBuildSettings() {
            Configuration = configuration
        });
    });

Task("Default")
    .IsDependentOn("Clean")
    .IsDependentOn("CompileJS")
    .IsDependentOn("CopyToWWWRoot")
    .IsDependentOn("CompileDotNet");

RunTarget(target);