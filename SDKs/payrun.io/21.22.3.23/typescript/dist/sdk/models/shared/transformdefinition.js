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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var TransformDefinitionTransformDefinition = /** @class */ (function (_super) {
    __extends(TransformDefinitionTransformDefinition, _super);
    function TransformDefinitionTransformDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Active" }),
        __metadata("design:type", Boolean)
    ], TransformDefinitionTransformDefinition.prototype, "active", void 0);
    __decorate([
        Metadata({ data: "json, name=ContentType" }),
        __metadata("design:type", String)
    ], TransformDefinitionTransformDefinition.prototype, "contentType", void 0);
    __decorate([
        Metadata({ data: "json, name=Definition" }),
        __metadata("design:type", String)
    ], TransformDefinitionTransformDefinition.prototype, "definition", void 0);
    __decorate([
        Metadata({ data: "json, name=DefinitionType" }),
        __metadata("design:type", String)
    ], TransformDefinitionTransformDefinition.prototype, "definitionType", void 0);
    __decorate([
        Metadata({ data: "json, name=Readonly" }),
        __metadata("design:type", Boolean)
    ], TransformDefinitionTransformDefinition.prototype, "readonly", void 0);
    __decorate([
        Metadata({ data: "json, name=SupportedReports" }),
        __metadata("design:type", String)
    ], TransformDefinitionTransformDefinition.prototype, "supportedReports", void 0);
    __decorate([
        Metadata({ data: "json, name=TaxYear" }),
        __metadata("design:type", Number)
    ], TransformDefinitionTransformDefinition.prototype, "taxYear", void 0);
    __decorate([
        Metadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], TransformDefinitionTransformDefinition.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=Version" }),
        __metadata("design:type", String)
    ], TransformDefinitionTransformDefinition.prototype, "version", void 0);
    return TransformDefinitionTransformDefinition;
}(SpeakeasyBase));
export { TransformDefinitionTransformDefinition };
var TransformDefinition = /** @class */ (function (_super) {
    __extends(TransformDefinition, _super);
    function TransformDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=TransformDefinition" }),
        __metadata("design:type", TransformDefinitionTransformDefinition)
    ], TransformDefinition.prototype, "transformDefinition", void 0);
    return TransformDefinition;
}(SpeakeasyBase));
export { TransformDefinition };
