import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TopicSentimentDomainEnum {
    Ecom = "Ecom",
    Employee = "Employee",
    Hotel = "Hotel",
    Restaurant = "Restaurant"
}


export class TopicSentimentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: TopicSentimentDomainEnum;
}


export class TopicSentimentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TopicSentimentQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.Post })
  request?: shared.Post[];
}


export class TopicSentimentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TopicSentimentOutput })
  topicSentimentResponse?: shared.TopicSentimentOutput[];
}
