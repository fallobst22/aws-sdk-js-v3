import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import {
  PurchaseReservedElasticsearchInstanceOfferingRequest,
  PurchaseReservedElasticsearchInstanceOfferingResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand,
  serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand,
} from "../protocols/Aws_restJson1";

export interface PurchaseReservedElasticsearchInstanceOfferingCommandInput
  extends PurchaseReservedElasticsearchInstanceOfferingRequest {}
export interface PurchaseReservedElasticsearchInstanceOfferingCommandOutput
  extends PurchaseReservedElasticsearchInstanceOfferingResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase reserved Elasticsearch instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, PurchaseReservedElasticsearchInstanceOfferingCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new PurchaseReservedElasticsearchInstanceOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedElasticsearchInstanceOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 */
export class PurchaseReservedElasticsearchInstanceOfferingCommand extends $Command<
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
  ElasticsearchServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PurchaseReservedElasticsearchInstanceOfferingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    PurchaseReservedElasticsearchInstanceOfferingCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "PurchaseReservedElasticsearchInstanceOfferingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PurchaseReservedElasticsearchInstanceOfferingRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PurchaseReservedElasticsearchInstanceOfferingResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: PurchaseReservedElasticsearchInstanceOfferingCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<PurchaseReservedElasticsearchInstanceOfferingCommandOutput> {
    return deserializeAws_restJson1PurchaseReservedElasticsearchInstanceOfferingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
