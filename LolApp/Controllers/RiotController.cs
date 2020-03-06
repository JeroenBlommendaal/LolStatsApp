using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LolApp.Models;
using LolApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace LolApp.Controllers
{
    public class RiotController : Controller
    {
        private readonly IRiotApi _riotApi;
        public RiotController(IRiotApi riotApi)
        {
            _riotApi = riotApi;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("api/summoner")]
        public async Task<SummonerResponse> GetSummonerInfo([FromBody]SummonerRequest request)
        {
            var summonerInfo = await _riotApi.GetSummonerInfoAsync(request.SummonerName, request.Region);

            return summonerInfo;
        }

        [HttpPost]
        [Route("api/ranked")]
        public async Task<RankedResponse> GetRankedInfo([FromBody]RankedRequest request)
        {
            var rankedInfo = await _riotApi.GetRankedInfoAsync(request.Id, request.Region);

            return rankedInfo;
        }
    }
}