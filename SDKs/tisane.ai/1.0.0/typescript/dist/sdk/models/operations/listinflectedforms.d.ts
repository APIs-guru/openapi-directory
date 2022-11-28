import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListInflectedFormsQueryParams extends SpeakeasyBase {
    family?: string;
    language?: string;
    lexeme?: string;
}
export declare class ListInflectedForms200ApplicationJsonFeatures extends SpeakeasyBase {
    index?: number;
    value?: string;
}
export declare class ListInflectedForms200ApplicationJson extends SpeakeasyBase {
    features?: ListInflectedForms200ApplicationJsonFeatures[];
    isLemma?: boolean;
    text?: string;
}
export declare class ListInflectedFormsRequest extends SpeakeasyBase {
    queryParams: ListInflectedFormsQueryParams;
}
export declare class ListInflectedFormsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listInflectedForms200ApplicationJsonObjects?: ListInflectedForms200ApplicationJson[];
}
