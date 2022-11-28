import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { PatrowlEngine } from "./patrowlengine";

type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"http://patrowl.local",
	"http://localhost:5001/engines/nmap/",
	"http://localhost:5004/engines/ssllabs/",
	"http://localhost:5005/engines/arachni/",
	"http://localhost:5006/engines/owl_dns/",
	"http://localhost:5007/engines/virustotal/",
	"http://localhost:5008/engines/urlvoid/",
	"http://localhost:5009/engines/cortex/",
	"http://localhost:5012/engines/owl_leaks/",
	"http://localhost:5013/engines/owl_code/",
	"http://localhost:5014/engines/sslscan/",
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

/* SDK Documentation: https://github.com/Patrowl/PatrowlDocs - Find out more about Patrowl*/
export class SDK {
  public patrowlEngine: PatrowlEngine;

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
    
    this.patrowlEngine = new PatrowlEngine(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
