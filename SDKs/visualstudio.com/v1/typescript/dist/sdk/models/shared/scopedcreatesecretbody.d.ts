import { SpeakeasyBase } from "../../../internal/utils";
import { SecretFilterBody } from "./secretfilterbody";
export declare class ScopedCreateSecretBody extends SpeakeasyBase {
    filters?: SecretFilterBody[];
    notes?: string;
    scope?: number;
    secretName?: string;
    type?: number;
    value?: string;
}
