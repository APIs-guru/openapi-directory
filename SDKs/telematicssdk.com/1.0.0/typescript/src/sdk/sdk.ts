import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { TwoForMobileAppOptional } from "./twoformobileappoptional";
import { Two1UserStatisticsOptional } from "./two1userstatisticsoptional";
import { Two2UserTripsOptional } from "./two2usertripsoptional";
import { Two4UserSafeScoringOptional } from "./two4usersafescoringoptional";
import { ThreeForBackEndOptional } from "./threeforbackendoptional";
import { ConsolidatedSafeScoring } from "./consolidatedsafescoring";
import { ConsolidatedStatistics } from "./consolidatedstatistics";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.telematicssdk.com",
	"https://mobilesdk.telematicssdk.com",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {
  public twoForMobileAppOptional: TwoForMobileAppOptional;
  public two1UserStatisticsOptional: Two1UserStatisticsOptional;
  public two2UserTripsOptional: Two2UserTripsOptional;
  public two4UserSafeScoringOptional: Two4UserSafeScoringOptional;
  public threeForBackEndOptional: ThreeForBackEndOptional;
  public consolidatedSafeScoring: ConsolidatedSafeScoring;
  public consolidatedStatistics: ConsolidatedStatistics;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
    this.twoForMobileAppOptional = new TwoForMobileAppOptional(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.two1UserStatisticsOptional = new Two1UserStatisticsOptional(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.two2UserTripsOptional = new Two2UserTripsOptional(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.two4UserSafeScoringOptional = new Two4UserSafeScoringOptional(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.threeForBackEndOptional = new ThreeForBackEndOptional(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.consolidatedSafeScoring = new ConsolidatedSafeScoring(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.consolidatedStatistics = new ConsolidatedStatistics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
