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
var UpdateDirectivePathParams = /** @class */ (function (_super) {
    __extends(UpdateDirectivePathParams, _super);
    function UpdateDirectivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=directiveId" }),
        __metadata("design:type", String)
    ], UpdateDirectivePathParams.prototype, "directiveId", void 0);
    return UpdateDirectivePathParams;
}(SpeakeasyBase));
export { UpdateDirectivePathParams };
export var UpdateDirective200ApplicationJsonActionEnum;
(function (UpdateDirective200ApplicationJsonActionEnum) {
    UpdateDirective200ApplicationJsonActionEnum["UpdateDirective"] = "updateDirective";
})(UpdateDirective200ApplicationJsonActionEnum || (UpdateDirective200ApplicationJsonActionEnum = {}));
var UpdateDirective200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateDirective200ApplicationJsonData, _super);
    function UpdateDirective200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], UpdateDirective200ApplicationJsonData.prototype, "directives", void 0);
    return UpdateDirective200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateDirective200ApplicationJsonData };
export var UpdateDirective200ApplicationJsonResultEnum;
(function (UpdateDirective200ApplicationJsonResultEnum) {
    UpdateDirective200ApplicationJsonResultEnum["Success"] = "success";
    UpdateDirective200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateDirective200ApplicationJsonResultEnum || (UpdateDirective200ApplicationJsonResultEnum = {}));
var UpdateDirective200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateDirective200ApplicationJson, _super);
    function UpdateDirective200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateDirective200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateDirective200ApplicationJsonData)
    ], UpdateDirective200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateDirective200ApplicationJson.prototype, "result", void 0);
    return UpdateDirective200ApplicationJson;
}(SpeakeasyBase));
export { UpdateDirective200ApplicationJson };
var UpdateDirectiveRequest = /** @class */ (function (_super) {
    __extends(UpdateDirectiveRequest, _super);
    function UpdateDirectiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDirectivePathParams)
    ], UpdateDirectiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Directive)
    ], UpdateDirectiveRequest.prototype, "request", void 0);
    return UpdateDirectiveRequest;
}(SpeakeasyBase));
export { UpdateDirectiveRequest };
var UpdateDirectiveResponse = /** @class */ (function (_super) {
    __extends(UpdateDirectiveResponse, _super);
    function UpdateDirectiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDirectiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDirectiveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDirective200ApplicationJson)
    ], UpdateDirectiveResponse.prototype, "updateDirective200ApplicationJsonObject", void 0);
    return UpdateDirectiveResponse;
}(SpeakeasyBase));
export { UpdateDirectiveResponse };
