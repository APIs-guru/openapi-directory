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
var DeclineChangeRequestPathParams = /** @class */ (function (_super) {
    __extends(DeclineChangeRequestPathParams, _super);
    function DeclineChangeRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=changeRequestId" }),
        __metadata("design:type", Number)
    ], DeclineChangeRequestPathParams.prototype, "changeRequestId", void 0);
    return DeclineChangeRequestPathParams;
}(SpeakeasyBase));
export { DeclineChangeRequestPathParams };
export var DeclineChangeRequest200ApplicationJsonActionEnum;
(function (DeclineChangeRequest200ApplicationJsonActionEnum) {
    DeclineChangeRequest200ApplicationJsonActionEnum["DeclineChangeRequest"] = "declineChangeRequest";
})(DeclineChangeRequest200ApplicationJsonActionEnum || (DeclineChangeRequest200ApplicationJsonActionEnum = {}));
var DeclineChangeRequest200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeclineChangeRequest200ApplicationJsonData, _super);
    function DeclineChangeRequest200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.ChangeRequest }),
        __metadata("design:type", Array)
    ], DeclineChangeRequest200ApplicationJsonData.prototype, "rules", void 0);
    return DeclineChangeRequest200ApplicationJsonData;
}(SpeakeasyBase));
export { DeclineChangeRequest200ApplicationJsonData };
export var DeclineChangeRequest200ApplicationJsonResultEnum;
(function (DeclineChangeRequest200ApplicationJsonResultEnum) {
    DeclineChangeRequest200ApplicationJsonResultEnum["Success"] = "success";
    DeclineChangeRequest200ApplicationJsonResultEnum["Error"] = "error";
})(DeclineChangeRequest200ApplicationJsonResultEnum || (DeclineChangeRequest200ApplicationJsonResultEnum = {}));
var DeclineChangeRequest200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeclineChangeRequest200ApplicationJson, _super);
    function DeclineChangeRequest200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeclineChangeRequest200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeclineChangeRequest200ApplicationJsonData)
    ], DeclineChangeRequest200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeclineChangeRequest200ApplicationJson.prototype, "result", void 0);
    return DeclineChangeRequest200ApplicationJson;
}(SpeakeasyBase));
export { DeclineChangeRequest200ApplicationJson };
var DeclineChangeRequestRequest = /** @class */ (function (_super) {
    __extends(DeclineChangeRequestRequest, _super);
    function DeclineChangeRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeclineChangeRequestPathParams)
    ], DeclineChangeRequestRequest.prototype, "pathParams", void 0);
    return DeclineChangeRequestRequest;
}(SpeakeasyBase));
export { DeclineChangeRequestRequest };
var DeclineChangeRequestResponse = /** @class */ (function (_super) {
    __extends(DeclineChangeRequestResponse, _super);
    function DeclineChangeRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeclineChangeRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeclineChangeRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeclineChangeRequest200ApplicationJson)
    ], DeclineChangeRequestResponse.prototype, "declineChangeRequest200ApplicationJsonObject", void 0);
    return DeclineChangeRequestResponse;
}(SpeakeasyBase));
export { DeclineChangeRequestResponse };
