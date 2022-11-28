import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TopicSentimentDomainEnum {
    Ecom = "Ecom",
    Employee = "Employee",
    Hotel = "Hotel",
    Restaurant = "Restaurant"
}
export declare class TopicSentimentQueryParams extends SpeakeasyBase {
    domain?: TopicSentimentDomainEnum;
}
export declare class TopicSentimentRequest extends SpeakeasyBase {
    queryParams: TopicSentimentQueryParams;
    request?: shared.Post[];
}
export declare class TopicSentimentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    topicSentimentResponse?: shared.TopicSentimentOutput[];
}
