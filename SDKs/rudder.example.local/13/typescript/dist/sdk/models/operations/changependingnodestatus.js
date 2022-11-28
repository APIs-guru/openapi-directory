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
var ChangePendingNodeStatusPathParams = /** @class */ (function (_super) {
    __extends(ChangePendingNodeStatusPathParams, _super);
    function ChangePendingNodeStatusPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], ChangePendingNodeStatusPathParams.prototype, "nodeId", void 0);
    return ChangePendingNodeStatusPathParams;
}(SpeakeasyBase));
export { ChangePendingNodeStatusPathParams };
export var ChangePendingNodeStatusRequestBodyStatusEnum;
(function (ChangePendingNodeStatusRequestBodyStatusEnum) {
    ChangePendingNodeStatusRequestBodyStatusEnum["Accepted"] = "accepted";
    ChangePendingNodeStatusRequestBodyStatusEnum["Refused"] = "refused";
})(ChangePendingNodeStatusRequestBodyStatusEnum || (ChangePendingNodeStatusRequestBodyStatusEnum = {}));
var ChangePendingNodeStatusRequestBody = /** @class */ (function (_super) {
    __extends(ChangePendingNodeStatusRequestBody, _super);
    function ChangePendingNodeStatusRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ChangePendingNodeStatusRequestBody.prototype, "status", void 0);
    return ChangePendingNodeStatusRequestBody;
}(SpeakeasyBase));
export { ChangePendingNodeStatusRequestBody };
export var ChangePendingNodeStatus200ApplicationJsonActionEnum;
(function (ChangePendingNodeStatus200ApplicationJsonActionEnum) {
    ChangePendingNodeStatus200ApplicationJsonActionEnum["ChangePendingNodeStatus"] = "changePendingNodeStatus";
})(ChangePendingNodeStatus200ApplicationJsonActionEnum || (ChangePendingNodeStatus200ApplicationJsonActionEnum = {}));
// ChangePendingNodeStatus200ApplicationJsonData
/**
 * Information about the node
**/
var ChangePendingNodeStatus200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ChangePendingNodeStatus200ApplicationJsonData, _super);
    function ChangePendingNodeStatus200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodes", elemType: shared.NodeFull }),
        __metadata("design:type", Array)
    ], ChangePendingNodeStatus200ApplicationJsonData.prototype, "nodes", void 0);
    return ChangePendingNodeStatus200ApplicationJsonData;
}(SpeakeasyBase));
export { ChangePendingNodeStatus200ApplicationJsonData };
export var ChangePendingNodeStatus200ApplicationJsonResultEnum;
(function (ChangePendingNodeStatus200ApplicationJsonResultEnum) {
    ChangePendingNodeStatus200ApplicationJsonResultEnum["Success"] = "success";
    ChangePendingNodeStatus200ApplicationJsonResultEnum["Error"] = "error";
})(ChangePendingNodeStatus200ApplicationJsonResultEnum || (ChangePendingNodeStatus200ApplicationJsonResultEnum = {}));
var ChangePendingNodeStatus200ApplicationJson = /** @class */ (function (_super) {
    __extends(ChangePendingNodeStatus200ApplicationJson, _super);
    function ChangePendingNodeStatus200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ChangePendingNodeStatus200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ChangePendingNodeStatus200ApplicationJsonData)
    ], ChangePendingNodeStatus200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ChangePendingNodeStatus200ApplicationJson.prototype, "result", void 0);
    return ChangePendingNodeStatus200ApplicationJson;
}(SpeakeasyBase));
export { ChangePendingNodeStatus200ApplicationJson };
var ChangePendingNodeStatusRequest = /** @class */ (function (_super) {
    __extends(ChangePendingNodeStatusRequest, _super);
    function ChangePendingNodeStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangePendingNodeStatusPathParams)
    ], ChangePendingNodeStatusRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ChangePendingNodeStatusRequestBody)
    ], ChangePendingNodeStatusRequest.prototype, "request", void 0);
    return ChangePendingNodeStatusRequest;
}(SpeakeasyBase));
export { ChangePendingNodeStatusRequest };
var ChangePendingNodeStatusResponse = /** @class */ (function (_super) {
    __extends(ChangePendingNodeStatusResponse, _super);
    function ChangePendingNodeStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChangePendingNodeStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChangePendingNodeStatusResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangePendingNodeStatus200ApplicationJson)
    ], ChangePendingNodeStatusResponse.prototype, "changePendingNodeStatus200ApplicationJsonObject", void 0);
    return ChangePendingNodeStatusResponse;
}(SpeakeasyBase));
export { ChangePendingNodeStatusResponse };
