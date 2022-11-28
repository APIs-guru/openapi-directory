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
var CheckDirectivePathParams = /** @class */ (function (_super) {
    __extends(CheckDirectivePathParams, _super);
    function CheckDirectivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" }),
        __metadata("design:type", String)
    ], CheckDirectivePathParams.prototype, "directiveId", void 0);
    return CheckDirectivePathParams;
}(SpeakeasyBase));
export { CheckDirectivePathParams };
export var CheckDirective200ApplicationJsonActionEnum;
(function (CheckDirective200ApplicationJsonActionEnum) {
    CheckDirective200ApplicationJsonActionEnum["CheckDirective"] = "checkDirective";
})(CheckDirective200ApplicationJsonActionEnum || (CheckDirective200ApplicationJsonActionEnum = {}));
var CheckDirective200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CheckDirective200ApplicationJsonData, _super);
    function CheckDirective200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], CheckDirective200ApplicationJsonData.prototype, "directives", void 0);
    return CheckDirective200ApplicationJsonData;
}(SpeakeasyBase));
export { CheckDirective200ApplicationJsonData };
export var CheckDirective200ApplicationJsonResultEnum;
(function (CheckDirective200ApplicationJsonResultEnum) {
    CheckDirective200ApplicationJsonResultEnum["Success"] = "success";
    CheckDirective200ApplicationJsonResultEnum["Error"] = "error";
})(CheckDirective200ApplicationJsonResultEnum || (CheckDirective200ApplicationJsonResultEnum = {}));
var CheckDirective200ApplicationJson = /** @class */ (function (_super) {
    __extends(CheckDirective200ApplicationJson, _super);
    function CheckDirective200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CheckDirective200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CheckDirective200ApplicationJsonData)
    ], CheckDirective200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CheckDirective200ApplicationJson.prototype, "result", void 0);
    return CheckDirective200ApplicationJson;
}(SpeakeasyBase));
export { CheckDirective200ApplicationJson };
var CheckDirectiveRequest = /** @class */ (function (_super) {
    __extends(CheckDirectiveRequest, _super);
    function CheckDirectiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckDirectivePathParams)
    ], CheckDirectiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Directive)
    ], CheckDirectiveRequest.prototype, "request", void 0);
    return CheckDirectiveRequest;
}(SpeakeasyBase));
export { CheckDirectiveRequest };
var CheckDirectiveResponse = /** @class */ (function (_super) {
    __extends(CheckDirectiveResponse, _super);
    function CheckDirectiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CheckDirectiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CheckDirectiveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CheckDirective200ApplicationJson)
    ], CheckDirectiveResponse.prototype, "checkDirective200ApplicationJsonObject", void 0);
    return CheckDirectiveResponse;
}(SpeakeasyBase));
export { CheckDirectiveResponse };
