var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListMetricServerList = [
    "https://insights.twilio.com",
];
var ListMetricPathParams = /** @class */ (function (_super) {
    __extends(ListMetricPathParams, _super);
    function ListMetricPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], ListMetricPathParams.prototype, "callSid", void 0);
    return ListMetricPathParams;
}(SpeakeasyBase));
export { ListMetricPathParams };
var ListMetricQueryParams = /** @class */ (function (_super) {
    __extends(ListMetricQueryParams, _super);
    function ListMetricQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Direction" }),
        __metadata("design:type", String)
    ], ListMetricQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Edge" }),
        __metadata("design:type", String)
    ], ListMetricQueryParams.prototype, "edge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMetricQueryParams.prototype, "pageSize", void 0);
    return ListMetricQueryParams;
}(SpeakeasyBase));
export { ListMetricQueryParams };
var ListMetricSecurity = /** @class */ (function (_super) {
    __extends(ListMetricSecurity, _super);
    function ListMetricSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMetricSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMetricSecurity;
}(SpeakeasyBase));
export { ListMetricSecurity };
var ListMetricListMetricResponseMeta = /** @class */ (function (_super) {
    __extends(ListMetricListMetricResponseMeta, _super);
    function ListMetricListMetricResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMetricListMetricResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMetricListMetricResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMetricListMetricResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMetricListMetricResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMetricListMetricResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMetricListMetricResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMetricListMetricResponseMeta.prototype, "url", void 0);
    return ListMetricListMetricResponseMeta;
}(SpeakeasyBase));
export { ListMetricListMetricResponseMeta };
var ListMetricListMetricResponse = /** @class */ (function (_super) {
    __extends(ListMetricListMetricResponse, _super);
    function ListMetricListMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMetricListMetricResponseMeta)
    ], ListMetricListMetricResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: shared.InsightsV1CallMetric }),
        __metadata("design:type", Array)
    ], ListMetricListMetricResponse.prototype, "metrics", void 0);
    return ListMetricListMetricResponse;
}(SpeakeasyBase));
export { ListMetricListMetricResponse };
var ListMetricRequest = /** @class */ (function (_super) {
    __extends(ListMetricRequest, _super);
    function ListMetricRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMetricRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMetricPathParams)
    ], ListMetricRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMetricQueryParams)
    ], ListMetricRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMetricSecurity)
    ], ListMetricRequest.prototype, "security", void 0);
    return ListMetricRequest;
}(SpeakeasyBase));
export { ListMetricRequest };
var ListMetricResponse = /** @class */ (function (_super) {
    __extends(ListMetricResponse, _super);
    function ListMetricResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMetricResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMetricListMetricResponse)
    ], ListMetricResponse.prototype, "listMetricResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMetricResponse.prototype, "statusCode", void 0);
    return ListMetricResponse;
}(SpeakeasyBase));
export { ListMetricResponse };
