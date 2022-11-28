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
export var CreateDirective200ApplicationJsonActionEnum;
(function (CreateDirective200ApplicationJsonActionEnum) {
    CreateDirective200ApplicationJsonActionEnum["CreateDirective"] = "createDirective";
})(CreateDirective200ApplicationJsonActionEnum || (CreateDirective200ApplicationJsonActionEnum = {}));
var CreateDirective200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateDirective200ApplicationJsonData, _super);
    function CreateDirective200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], CreateDirective200ApplicationJsonData.prototype, "directives", void 0);
    return CreateDirective200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateDirective200ApplicationJsonData };
export var CreateDirective200ApplicationJsonResultEnum;
(function (CreateDirective200ApplicationJsonResultEnum) {
    CreateDirective200ApplicationJsonResultEnum["Success"] = "success";
    CreateDirective200ApplicationJsonResultEnum["Error"] = "error";
})(CreateDirective200ApplicationJsonResultEnum || (CreateDirective200ApplicationJsonResultEnum = {}));
var CreateDirective200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateDirective200ApplicationJson, _super);
    function CreateDirective200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateDirective200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateDirective200ApplicationJsonData)
    ], CreateDirective200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateDirective200ApplicationJson.prototype, "result", void 0);
    return CreateDirective200ApplicationJson;
}(SpeakeasyBase));
export { CreateDirective200ApplicationJson };
var CreateDirectiveRequest = /** @class */ (function (_super) {
    __extends(CreateDirectiveRequest, _super);
    function CreateDirectiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DirectiveNew)
    ], CreateDirectiveRequest.prototype, "request", void 0);
    return CreateDirectiveRequest;
}(SpeakeasyBase));
export { CreateDirectiveRequest };
var CreateDirectiveResponse = /** @class */ (function (_super) {
    __extends(CreateDirectiveResponse, _super);
    function CreateDirectiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDirectiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDirectiveResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDirective200ApplicationJson)
    ], CreateDirectiveResponse.prototype, "createDirective200ApplicationJsonObject", void 0);
    return CreateDirectiveResponse;
}(SpeakeasyBase));
export { CreateDirectiveResponse };
