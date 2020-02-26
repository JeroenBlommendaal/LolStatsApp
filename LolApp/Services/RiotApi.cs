using LolApp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace LolApp.Services
{
    public class RiotApi : IRiotApi
    {
        private readonly HttpClient _client;

        public RiotApi()
        {
            _client = new HttpClient();
            _client.DefaultRequestHeaders.Add("X-Riot-Token", "RGAPI-f32cbd6e-a506-48c4-9d55-323d3cba4245");
            _client.DefaultRequestHeaders.Add("Access-Control-Allow-Origin", "*");
        }

        public async Task<SummonerResponse> GetSummonerInfoAsync(string summonerName, string region)
        {
            try
            {
                var uri = $"https://{region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{summonerName}";
                var response = await _client.GetAsync(uri);

                if(response.IsSuccessStatusCode)
                {
                    var jsonString = await response.Content.ReadAsStringAsync();
                    var json = JsonConvert.DeserializeObject<SummonerResponse>(jsonString);
                    return json;
                }
            } catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return new SummonerResponse();
        }
    }
}
