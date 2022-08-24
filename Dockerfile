FROM public.ecr.aws/lambda/nodejs:12

# Copy function code
COPY . ${LAMBDA_TASK_ROOT}

EXPOSE 2525

RUN npm ci --only=production 

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "index.handler" ]