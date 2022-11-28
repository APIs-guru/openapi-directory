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
var UpdateChangeRequestPathParams = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestPathParams, _super);
    function UpdateChangeRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" }),
        __metadata("design:type", Number)
    ], UpdateChangeRequestPathParams.prototype, "changeRequestId", void 0);
    return UpdateChangeRequestPathParams;
}(SpeakeasyBase));
export { UpdateChangeRequestPathParams };
var UpdateChangeRequestRequestBody = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestRequestBody, _super);
    function UpdateChangeRequestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], UpdateChangeRequestRequestBody.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateChangeRequestRequestBody.prototype, "name", void 0);
    return UpdateChangeRequestRequestBody;
}(SpeakeasyBase));
export { UpdateChangeRequestRequestBody };
export var UpdateChangeRequest200ApplicationJsonActionEnum;
(function (UpdateChangeRequest200ApplicationJsonActionEnum) {
    UpdateChangeRequest200ApplicationJsonActionEnum["UpdateChangeRequest"] = "updateChangeRequest";
})(UpdateChangeRequest200ApplicationJsonActionEnum || (UpdateChangeRequest200ApplicationJsonActionEnum = {}));
var UpdateChangeRequest200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateChangeRequest200ApplicationJsonData, _super);
    function UpdateChangeRequest200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest }),
        __metadata("design:type", Array)
    ], UpdateChangeRequest200ApplicationJsonData.prototype, "rules", void 0);
    return UpdateChangeRequest200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateChangeRequest200ApplicationJsonData };
export var UpdateChangeRequest200ApplicationJsonResultEnum;
(function (UpdateChangeRequest200ApplicationJsonResultEnum) {
    UpdateChangeRequest200ApplicationJsonResultEnum["Success"] = "success";
    UpdateChangeRequest200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateChangeRequest200ApplicationJsonResultEnum || (UpdateChangeRequest200ApplicationJsonResultEnum = {}));
var UpdateChangeRequest200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateChangeRequest200ApplicationJson, _super);
    function UpdateChangeRequest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateChangeRequest200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateChangeRequest200ApplicationJsonData)
    ], UpdateChangeRequest200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateChangeRequest200ApplicationJson.prototype, "result", void 0);
    return UpdateChangeRequest200ApplicationJson;
}(SpeakeasyBase));
export { UpdateChangeRequest200ApplicationJson };
var UpdateChangeRequestRequest = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestRequest, _super);
    function UpdateChangeRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateChangeRequestPathParams)
    ], UpdateChangeRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateChangeRequestRequestBody)
    ], UpdateChangeRequestRequest.prototype, "request", void 0);
    return UpdateChangeRequestRequest;
}(SpeakeasyBase));
export { UpdateChangeRequestRequest };
var UpdateChangeRequestResponse = /** @class */ (function (_super) {
    __extends(UpdateChangeRequestResponse, _super);
    function UpdateChangeRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateChangeRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateChangeRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateChangeRequest200ApplicationJson)
    ], UpdateChangeRequestResponse.prototype, "updateChangeRequest200ApplicationJsonObject", void 0);
    return UpdateChangeRequestResponse;
}(SpeakeasyBase));
export { UpdateChangeRequestResponse };
