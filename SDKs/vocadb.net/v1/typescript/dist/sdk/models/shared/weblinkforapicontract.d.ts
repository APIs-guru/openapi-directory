import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WebLinkForApiContractCategoryEnum {
    Official = "Official",
    Commercial = "Commercial",
    Reference = "Reference",
    Other = "Other"
}
export declare class WebLinkForApiContract extends SpeakeasyBase {
    category?: WebLinkForApiContractCategoryEnum;
    description?: string;
    descriptionOrUrl?: string;
    disabled?: boolean;
    id?: number;
    url?: string;
}
