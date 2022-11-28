import { SpeakeasyBase } from "../../../internal/utils";
import { SecretFilterBody } from "./secretfilterbody";
export declare class ScopedSecretResultBody extends SpeakeasyBase {
    filters?: SecretFilterBody[];
    id?: string;
    lastModified?: Date;
    notes?: string;
    scope?: number;
    secretName?: string;
    type?: number;
}
