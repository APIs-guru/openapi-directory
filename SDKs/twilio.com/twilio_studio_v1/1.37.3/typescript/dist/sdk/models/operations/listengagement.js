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
export var ListEngagementServerList = [
    "https://studio.twilio.com",
];
var ListEngagementPathParams = /** @class */ (function (_super) {
    __extends(ListEngagementPathParams, _super);
    function ListEngagementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], ListEngagementPathParams.prototype, "flowSid", void 0);
    return ListEngagementPathParams;
}(SpeakeasyBase));
export { ListEngagementPathParams };
var ListEngagementQueryParams = /** @class */ (function (_super) {
    __extends(ListEngagementQueryParams, _super);
    function ListEngagementQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEngagementQueryParams.prototype, "pageSize", void 0);
    return ListEngagementQueryParams;
}(SpeakeasyBase));
export { ListEngagementQueryParams };
var ListEngagementSecurity = /** @class */ (function (_super) {
    __extends(ListEngagementSecurity, _super);
    function ListEngagementSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEngagementSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEngagementSecurity;
}(SpeakeasyBase));
export { ListEngagementSecurity };
var ListEngagementListEngagementResponseMeta = /** @class */ (function (_super) {
    __extends(ListEngagementListEngagementResponseMeta, _super);
    function ListEngagementListEngagementResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEngagementListEngagementResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEngagementListEngagementResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEngagementListEngagementResponseMeta.prototype, "url", void 0);
    return ListEngagementListEngagementResponseMeta;
}(SpeakeasyBase));
export { ListEngagementListEngagementResponseMeta };
var ListEngagementListEngagementResponse = /** @class */ (function (_super) {
    __extends(ListEngagementListEngagementResponse, _super);
    function ListEngagementListEngagementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=engagements", elemType: shared.StudioV1FlowEngagement }),
        __metadata("design:type", Array)
    ], ListEngagementListEngagementResponse.prototype, "engagements", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListEngagementListEngagementResponseMeta)
    ], ListEngagementListEngagementResponse.prototype, "meta", void 0);
    return ListEngagementListEngagementResponse;
}(SpeakeasyBase));
export { ListEngagementListEngagementResponse };
var ListEngagementRequest = /** @class */ (function (_super) {
    __extends(ListEngagementRequest, _super);
    function ListEngagementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEngagementRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEngagementPathParams)
    ], ListEngagementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEngagementQueryParams)
    ], ListEngagementRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEngagementSecurity)
    ], ListEngagementRequest.prototype, "security", void 0);
    return ListEngagementRequest;
}(SpeakeasyBase));
export { ListEngagementRequest };
var ListEngagementResponse = /** @class */ (function (_super) {
    __extends(ListEngagementResponse, _super);
    function ListEngagementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListEngagementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListEngagementListEngagementResponse)
    ], ListEngagementResponse.prototype, "listEngagementResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListEngagementResponse.prototype, "statusCode", void 0);
    return ListEngagementResponse;
}(SpeakeasyBase));
export { ListEngagementResponse };
