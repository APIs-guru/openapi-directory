import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Authorization } from "./authorization";
import { CheckApiUsage } from "./checkapiusage";
import { LanguageDatasets } from "./languagedatasets";
import { LanguageExamples } from "./languageexamples";
import { LanguageModels } from "./languagemodels";
import { LanguagePrediction } from "./languageprediction";
import { LanguageTraining } from "./languagetraining";
import { VisionDatasets } from "./visiondatasets";
import { VisionExamples } from "./visionexamples";
import { VisionModels } from "./visionmodels";
import { VisionPrediction } from "./visionprediction";
import { VisionTraining } from "./visiontraining";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://salesforce.local",
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

/* SDK Documentation: https://metamind.readme.io - For more information, see the Einstein Platform Services Developer Guide*/
export class SDK {
  public authorization: Authorization;
  public checkApiUsage: CheckApiUsage;
  public languageDatasets: LanguageDatasets;
  public languageExamples: LanguageExamples;
  public languageModels: LanguageModels;
  public languagePrediction: LanguagePrediction;
  public languageTraining: LanguageTraining;
  public visionDatasets: VisionDatasets;
  public visionExamples: VisionExamples;
  public visionModels: VisionModels;
  public visionPrediction: VisionPrediction;
  public visionTraining: VisionTraining;

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
    
    this.authorization = new Authorization(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.checkApiUsage = new CheckApiUsage(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.languageDatasets = new LanguageDatasets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.languageExamples = new LanguageExamples(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.languageModels = new LanguageModels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.languagePrediction = new LanguagePrediction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.languageTraining = new LanguageTraining(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.visionDatasets = new VisionDatasets(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.visionExamples = new VisionExamples(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.visionModels = new VisionModels(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.visionPrediction = new VisionPrediction(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.visionTraining = new VisionTraining(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
