import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TopicSentimentDomainEnum {
    Ecom = "Ecom"
,    Employee = "Employee"
,    Hotel = "Hotel"
,    Restaurant = "Restaurant"
}


export class TopicSentimentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain?: TopicSentimentDomainEnum;
}


export class TopicSentimentRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TopicSentimentQueryParams;

  @Metadata({ data: "request, media_type=application/json", elemType: shared.Post })
  request?: shared.Post[];
}


export class TopicSentimentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TopicSentimentOutput })
  topicSentimentResponse?: shared.TopicSentimentOutput[];
}
