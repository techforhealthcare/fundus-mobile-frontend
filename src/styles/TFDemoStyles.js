import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171f24',
    alignItems: 'center',
  },
  loadingContainer: {
    marginTop: 80,
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
  },
  get textWithBottomMargin() {
    return {
      ...this.text,
      marginBottom: '5%',
    };
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  imageWrapper: {
    width: 280,
    height: 280,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 5,
    borderStyle: 'solid',
    marginTop: 40,
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  transparentText: {
    color: '#ffffff',
    opacity: 0.7,
  },
  footer: {
    marginTop: 40,
  },
});
