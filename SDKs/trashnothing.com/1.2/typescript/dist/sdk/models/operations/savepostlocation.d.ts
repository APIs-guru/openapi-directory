import { SpeakeasyBase } from "../../../internal/utils";
export declare class SavePostLocationRequestBody extends SpeakeasyBase {
    latitude: number;
    longitude: number;
    name: string;
}
export declare class SavePostLocation200ApplicationJson extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
    name?: string;
}
export declare class SavePostLocationRequest extends SpeakeasyBase {
    request: SavePostLocationRequestBody;
}
export declare class SavePostLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    savePostLocation200ApplicationJsonObjects?: SavePostLocation200ApplicationJson[];
}
