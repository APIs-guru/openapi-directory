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
var ListTechniquesDirectivesPathParams = /** @class */ (function (_super) {
    __extends(ListTechniquesDirectivesPathParams, _super);
    function ListTechniquesDirectivesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=techniqueName" }),
        __metadata("design:type", String)
    ], ListTechniquesDirectivesPathParams.prototype, "techniqueName", void 0);
    return ListTechniquesDirectivesPathParams;
}(SpeakeasyBase));
export { ListTechniquesDirectivesPathParams };
export var ListTechniquesDirectives200ApplicationJsonActionEnum;
(function (ListTechniquesDirectives200ApplicationJsonActionEnum) {
    ListTechniquesDirectives200ApplicationJsonActionEnum["ListTechniquesDirectives"] = "listTechniquesDirectives";
})(ListTechniquesDirectives200ApplicationJsonActionEnum || (ListTechniquesDirectives200ApplicationJsonActionEnum = {}));
var ListTechniquesDirectives200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ListTechniquesDirectives200ApplicationJsonData, _super);
    function ListTechniquesDirectives200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directives", elemType: shared.Directive }),
        __metadata("design:type", Array)
    ], ListTechniquesDirectives200ApplicationJsonData.prototype, "directives", void 0);
    return ListTechniquesDirectives200ApplicationJsonData;
}(SpeakeasyBase));
export { ListTechniquesDirectives200ApplicationJsonData };
export var ListTechniquesDirectives200ApplicationJsonResultEnum;
(function (ListTechniquesDirectives200ApplicationJsonResultEnum) {
    ListTechniquesDirectives200ApplicationJsonResultEnum["Success"] = "success";
    ListTechniquesDirectives200ApplicationJsonResultEnum["Error"] = "error";
})(ListTechniquesDirectives200ApplicationJsonResultEnum || (ListTechniquesDirectives200ApplicationJsonResultEnum = {}));
var ListTechniquesDirectives200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListTechniquesDirectives200ApplicationJson, _super);
    function ListTechniquesDirectives200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ListTechniquesDirectives200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ListTechniquesDirectives200ApplicationJsonData)
    ], ListTechniquesDirectives200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ListTechniquesDirectives200ApplicationJson.prototype, "result", void 0);
    return ListTechniquesDirectives200ApplicationJson;
}(SpeakeasyBase));
export { ListTechniquesDirectives200ApplicationJson };
var ListTechniquesDirectivesRequest = /** @class */ (function (_super) {
    __extends(ListTechniquesDirectivesRequest, _super);
    function ListTechniquesDirectivesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTechniquesDirectivesPathParams)
    ], ListTechniquesDirectivesRequest.prototype, "pathParams", void 0);
    return ListTechniquesDirectivesRequest;
}(SpeakeasyBase));
export { ListTechniquesDirectivesRequest };
var ListTechniquesDirectivesResponse = /** @class */ (function (_super) {
    __extends(ListTechniquesDirectivesResponse, _super);
    function ListTechniquesDirectivesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListTechniquesDirectivesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListTechniquesDirectivesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListTechniquesDirectives200ApplicationJson)
    ], ListTechniquesDirectivesResponse.prototype, "listTechniquesDirectives200ApplicationJsonObject", void 0);
    return ListTechniquesDirectivesResponse;
}(SpeakeasyBase));
export { ListTechniquesDirectivesResponse };
