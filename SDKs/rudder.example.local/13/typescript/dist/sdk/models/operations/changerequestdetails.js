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
var ChangeRequestDetailsPathParams = /** @class */ (function (_super) {
    __extends(ChangeRequestDetailsPathParams, _super);
    function ChangeRequestDetailsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" }),
        __metadata("design:type", Number)
    ], ChangeRequestDetailsPathParams.prototype, "changeRequestId", void 0);
    return ChangeRequestDetailsPathParams;
}(SpeakeasyBase));
export { ChangeRequestDetailsPathParams };
export var ChangeRequestDetails200ApplicationJsonActionEnum;
(function (ChangeRequestDetails200ApplicationJsonActionEnum) {
    ChangeRequestDetails200ApplicationJsonActionEnum["ChangeRequestDetails"] = "changeRequestDetails";
})(ChangeRequestDetails200ApplicationJsonActionEnum || (ChangeRequestDetails200ApplicationJsonActionEnum = {}));
var ChangeRequestDetails200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ChangeRequestDetails200ApplicationJsonData, _super);
    function ChangeRequestDetails200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest }),
        __metadata("design:type", Array)
    ], ChangeRequestDetails200ApplicationJsonData.prototype, "rules", void 0);
    return ChangeRequestDetails200ApplicationJsonData;
}(SpeakeasyBase));
export { ChangeRequestDetails200ApplicationJsonData };
export var ChangeRequestDetails200ApplicationJsonResultEnum;
(function (ChangeRequestDetails200ApplicationJsonResultEnum) {
    ChangeRequestDetails200ApplicationJsonResultEnum["Success"] = "success";
    ChangeRequestDetails200ApplicationJsonResultEnum["Error"] = "error";
})(ChangeRequestDetails200ApplicationJsonResultEnum || (ChangeRequestDetails200ApplicationJsonResultEnum = {}));
var ChangeRequestDetails200ApplicationJson = /** @class */ (function (_super) {
    __extends(ChangeRequestDetails200ApplicationJson, _super);
    function ChangeRequestDetails200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ChangeRequestDetails200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ChangeRequestDetails200ApplicationJsonData)
    ], ChangeRequestDetails200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ChangeRequestDetails200ApplicationJson.prototype, "result", void 0);
    return ChangeRequestDetails200ApplicationJson;
}(SpeakeasyBase));
export { ChangeRequestDetails200ApplicationJson };
var ChangeRequestDetailsRequest = /** @class */ (function (_super) {
    __extends(ChangeRequestDetailsRequest, _super);
    function ChangeRequestDetailsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeRequestDetailsPathParams)
    ], ChangeRequestDetailsRequest.prototype, "pathParams", void 0);
    return ChangeRequestDetailsRequest;
}(SpeakeasyBase));
export { ChangeRequestDetailsRequest };
var ChangeRequestDetailsResponse = /** @class */ (function (_super) {
    __extends(ChangeRequestDetailsResponse, _super);
    function ChangeRequestDetailsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChangeRequestDetailsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChangeRequestDetailsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChangeRequestDetails200ApplicationJson)
    ], ChangeRequestDetailsResponse.prototype, "changeRequestDetails200ApplicationJsonObject", void 0);
    return ChangeRequestDetailsResponse;
}(SpeakeasyBase));
export { ChangeRequestDetailsResponse };
