import { SpeakeasyBase } from "../../../internal/utils";
import { SecretFilterBody } from "./secretfilterbody";
export declare class ScopedUpdateSecretBody extends SpeakeasyBase {
    filters?: SecretFilterBody[];
    notes?: string;
    scope?: number;
    secretName?: string;
    value?: string;
}
