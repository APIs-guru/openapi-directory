import { AxiosInstance } from "axios";
import { AuthController } from "./authcontroller";
import { ObservationController } from "./observationcontroller";
import { ObservationHeadingController } from "./observationheadingcontroller";
import { PatientController } from "./patientcontroller";
import { PatientManagementController } from "./patientmanagementcontroller";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.patientview.org/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    authController: AuthController;
    observationController: ObservationController;
    observationHeadingController: ObservationHeadingController;
    patientController: PatientController;
    patientManagementController: PatientManagementController;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
