import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateANewQuestionRequestBody extends SpeakeasyBase {
    choices?: string[];
    question?: string;
}
export declare class CreateANewQuestionRequest extends SpeakeasyBase {
    request?: CreateANewQuestionRequestBody;
}
export declare class CreateANewQuestionResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
