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
var AcceptChangeRequestPathParams = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestPathParams, _super);
    function AcceptChangeRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" }),
        __metadata("design:type", Number)
    ], AcceptChangeRequestPathParams.prototype, "changeRequestId", void 0);
    return AcceptChangeRequestPathParams;
}(SpeakeasyBase));
export { AcceptChangeRequestPathParams };
export var AcceptChangeRequestRequestBodyStatusEnum;
(function (AcceptChangeRequestRequestBodyStatusEnum) {
    AcceptChangeRequestRequestBodyStatusEnum["PendingDeployment"] = "pending deployment";
    AcceptChangeRequestRequestBodyStatusEnum["Deployed"] = "deployed";
})(AcceptChangeRequestRequestBodyStatusEnum || (AcceptChangeRequestRequestBodyStatusEnum = {}));
var AcceptChangeRequestRequestBody = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestRequestBody, _super);
    function AcceptChangeRequestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], AcceptChangeRequestRequestBody.prototype, "status", void 0);
    return AcceptChangeRequestRequestBody;
}(SpeakeasyBase));
export { AcceptChangeRequestRequestBody };
export var AcceptChangeRequest200ApplicationJsonActionEnum;
(function (AcceptChangeRequest200ApplicationJsonActionEnum) {
    AcceptChangeRequest200ApplicationJsonActionEnum["AcceptChangeRequest"] = "acceptChangeRequest";
})(AcceptChangeRequest200ApplicationJsonActionEnum || (AcceptChangeRequest200ApplicationJsonActionEnum = {}));
var AcceptChangeRequest200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(AcceptChangeRequest200ApplicationJsonData, _super);
    function AcceptChangeRequest200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest }),
        __metadata("design:type", Array)
    ], AcceptChangeRequest200ApplicationJsonData.prototype, "rules", void 0);
    return AcceptChangeRequest200ApplicationJsonData;
}(SpeakeasyBase));
export { AcceptChangeRequest200ApplicationJsonData };
export var AcceptChangeRequest200ApplicationJsonResultEnum;
(function (AcceptChangeRequest200ApplicationJsonResultEnum) {
    AcceptChangeRequest200ApplicationJsonResultEnum["Success"] = "success";
    AcceptChangeRequest200ApplicationJsonResultEnum["Error"] = "error";
})(AcceptChangeRequest200ApplicationJsonResultEnum || (AcceptChangeRequest200ApplicationJsonResultEnum = {}));
var AcceptChangeRequest200ApplicationJson = /** @class */ (function (_super) {
    __extends(AcceptChangeRequest200ApplicationJson, _super);
    function AcceptChangeRequest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], AcceptChangeRequest200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", AcceptChangeRequest200ApplicationJsonData)
    ], AcceptChangeRequest200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], AcceptChangeRequest200ApplicationJson.prototype, "result", void 0);
    return AcceptChangeRequest200ApplicationJson;
}(SpeakeasyBase));
export { AcceptChangeRequest200ApplicationJson };
var AcceptChangeRequestRequest = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestRequest, _super);
    function AcceptChangeRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptChangeRequestPathParams)
    ], AcceptChangeRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AcceptChangeRequestRequestBody)
    ], AcceptChangeRequestRequest.prototype, "request", void 0);
    return AcceptChangeRequestRequest;
}(SpeakeasyBase));
export { AcceptChangeRequestRequest };
var AcceptChangeRequestResponse = /** @class */ (function (_super) {
    __extends(AcceptChangeRequestResponse, _super);
    function AcceptChangeRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcceptChangeRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcceptChangeRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptChangeRequest200ApplicationJson)
    ], AcceptChangeRequestResponse.prototype, "acceptChangeRequest200ApplicationJsonObject", void 0);
    return AcceptChangeRequestResponse;
}(SpeakeasyBase));
export { AcceptChangeRequestResponse };
