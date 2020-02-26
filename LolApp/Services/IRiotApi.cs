using LolApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LolApp.Services
{
    public interface IRiotApi
    {
        public Task<SummonerResponse> GetSummonerInfoAsync(string summonerName, string region);
    }
}
