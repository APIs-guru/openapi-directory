import { SpeakeasyBase } from "../../../internal/utils";
import { CodeCategory } from "./codecategory";
import { Lookup } from "./lookup";
import { CodeExternalStandard } from "./codeexternalstandard";
import { Link } from "./link";
export declare enum CodeSourceTypeEnum {
    Patientview = "PATIENTVIEW",
    NhsChoices = "NHS_CHOICES"
}
export declare class Code extends SpeakeasyBase {
    code?: string;
    codeCategories?: CodeCategory[];
    codeType?: Lookup;
    created?: Date;
    description?: string;
    displayOrder?: number;
    externalStandards?: CodeExternalStandard[];
    fullDescription?: string;
    hideFromPatients?: boolean;
    id?: number;
    lastUpdate?: Date;
    links?: Link[];
    patientFriendlyName?: string;
    removedExternally?: boolean;
    sourceType?: CodeSourceTypeEnum;
    standardType?: Lookup;
}
