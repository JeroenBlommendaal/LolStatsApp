﻿using LolApp.Models;
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
            _client.DefaultRequestHeaders.Add("X-Riot-Token", "RGAPI-038de300-113e-4ccf-856f-520e1ab67ee5");
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
